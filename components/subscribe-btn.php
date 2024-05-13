<?php 

function convertToDotnetEncoding($str) {
    $search = ['%2D', '%5F', '%2E', '%21', '%2A', '%28', '%29', '%20'];
    $replace = ['-', '_', '.', '!', '*', '(', ')', '+'];
    return str_replace($search, $replace, $str);
}

function generateCheckMacValue($params, $hashKey, $hashIV) {
    ksort($params);
    $str = "HashKey=" . $hashKey;
    foreach ($params as $key => $value) {
        $str .= "&$key=$value";
    }
    $str .= "&HashIV=" . $hashIV;
    $str = strtolower(convertToDotnetEncoding(urlencode($str)));
    return strtoupper(hash('sha256', $str));
}

$user_id = get_current_user_id();

if ($user_id == 0) {
    wp_redirect('/dashboard');
    exit;
}

$config = json_decode(file_get_contents(get_template_directory() . '/ecpay-config.json'), true);
$configParams = $config['subscription']['params'];
$configHashKey = $config['subscription']['HashKey'];
$configHashIV = $config['subscription']['HashIV'];
$website_url = get_site_url();

$params = [
    'MerchantID' => $configParams['MerchantID'],
    'MerchantTradeNo' => 'Order' . time(),
    'MerchantTradeDate' => date('Y/m/d H:i:s'),
    'PaymentType' => 'aio',
    'TotalAmount' => $configParams['TotalAmount'],
    'TradeDesc' => $configParams['TradeDesc'],
    'ItemName' => $configParams['ItemName'],
    'ReturnURL' => $website_url . '/wp-json/subscription/payment',
    'ChoosePayment' => 'Credit',
    'EncryptType' => '1',
    'ClientBackURL' => $website_url . '/dashboard',
    'PeriodAmount' => $configParams['PeriodAmount'],
    'PeriodType' => $configParams['PeriodType'],
    'Frequency' => $configParams['Frequency'],
    'ExecTimes' => $configParams['ExecTimes'],
    'PeriodReturnURL' => $website_url . '/wp-json/subscription/period',
    'CustomField1' => $user_id,
];


$checkMacValue = generateCheckMacValue($params, $configHashKey, $configHashIV);
?>

<!-- HTML form with a button -->
<form method="post" action=<?php echo $config['subscription']['url'] ?>> <!-- Change to the production URL when going live -->
    <?php foreach ($params as $key => $value): ?>
    <input type="hidden" name="<?php echo $key; ?>" value="<?php echo $value; ?>">
    <?php endforeach; ?>
    <input type="hidden" name="CheckMacValue" value="<?php echo $checkMacValue; ?>">
    <button type="submit">馬上訂閱！</button>
</form>