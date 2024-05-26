import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Button } from '@chakra-ui/react';

const config = {
	subscription: {
		url: "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5",
		HashKey: "pwFHCqoQZGmho4w6",
		HashIV: "EkRm7iFT261dpevs",
		params: {
			MerchantID: "3002607",
			TotalAmount: 100,
			TradeDesc: "test description",
			ItemName: "test name",
			PeriodAmount: 100,
			PeriodType: "M",
			Frequency: 1,
			ExecTimes: 99
		}
	}
}

function SubscribeButton({ userId }: { userId: number }) {
	const [checkMacValue, setCheckMacValue] = useState('');

	const configParams = config.subscription.params;
	const configHashKey = config.subscription.HashKey;
	const configHashIV = config.subscription.HashIV;
	const websiteUrl = window.location.origin;

	const params = {
		MerchantID: configParams.MerchantID,
		MerchantTradeNo: userId + '_' + format(new Date(), 'yyyyMMddHHmmss'),
		MerchantTradeDate: format(new Date(), 'yyyy/MM/dd HH:mm:ss'),
		PaymentType: 'aio',
		TotalAmount: configParams.TotalAmount,
		TradeDesc: configParams.TradeDesc,
		ItemName: configParams.ItemName,
		ReturnURL: websiteUrl + '/wp-json/subscription/payment',
		ChoosePayment: 'Credit',
		EncryptType: '1',
		ClientBackURL: websiteUrl + '/dashboard',
		PeriodAmount: configParams.PeriodAmount,
		PeriodType: configParams.PeriodType,
		Frequency: configParams.Frequency,
		ExecTimes: configParams.ExecTimes,
		PeriodReturnURL: websiteUrl + '/wp-json/subscription/period',
	};

	useEffect(() => {
		const getCheckMacValue = async () => {
			const value = await generateCheckMacValue(params, configHashKey, configHashIV);
			setCheckMacValue(value);
		};

		getCheckMacValue();
	}, [params, configHashKey, configHashIV]);

	function convertToDotnetEncoding(str: string) {
		const search = ['%2D', '%5F', '%2E', '%21', '%2A', '%28', '%29', '%20'];
		const replace = ['-', '_', '.', '!', '*', '(', ')', '+'];
		return str.replace(new RegExp(search.join('|'), 'g'), matched => replace[search.indexOf(matched)]);
	}

	async function sha256(message: string) {
		// encode as UTF-8
		const msgBuffer = new TextEncoder().encode(message);

		// hash the message
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

		// convert ArrayBuffer to Array
		const hashArray = Array.from(new Uint8Array(hashBuffer));

		// convert bytes to hex string                  
		const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	}


	async function generateCheckMacValue(params: any, hashKey: string, hashIV: string) {
		const sortedParams = Object.fromEntries(Object.entries(params).sort());
		let str = "HashKey=" + hashKey;
		for (const [key, value] of Object.entries(sortedParams)) {
			if (typeof value === 'string' || typeof value === 'number' || Array.isArray(value)) {
				str += `&${key}=${value}`;
			} else {
				// Handle the case where value is not of the expected type
				console.error(`Unexpected type for key ${key}`);
			}
		}
		str += "&HashIV=" + hashIV;
		str = encodeURIComponent(str).toLowerCase();
		str = convertToDotnetEncoding(str);
		return (await sha256(str)).toUpperCase();
	}

	return userId !== 0 && (
		<form method="post" action={config.subscription.url}>
			{Object.entries(params).map(([key, value]) => (
				<input key={key} type="hidden" name={key} value={value} />
			))}
			<input type="hidden" name="CheckMacValue" value={checkMacValue} />
			<Button type="submit" colorScheme='blue'>馬上訂閱！</Button>
		</form>
	);
}

export default SubscribeButton;