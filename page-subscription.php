<?php 
/*
To view this page:
1. Go to the WordPress admin panel and create a new page with slug 'subscription'.
2. Go to /subscription to view the page.
*/

get_header(); 

function convertToDotnetEncoding($str) {
    $search = ['%2D', '%5F', '%2E', '%21', '%2A', '%28', '%29', '%20'];
    $replace = ['-', '_', '.', '!', '*', '(', ')', '+'];
    return str_replace($search, $replace, $str);
}

function generateCheckMacValue($params) {
    ksort($params);
    $str = "HashKey=ZXpQxLdrKxGnAcbc";
    foreach ($params as $key => $value) {
        $str .= "&$key=$value";
    }
    $str .= "&HashIV=n1bmILLzgT8BRMwy";
    $str = strtolower(convertToDotnetEncoding(urlencode($str)));
    return strtoupper(hash('sha256', $str));
}

$params = [
    'MerchantID' => '3261883',
    'MerchantTradeNo' => 'Order' . time(),
    'MerchantTradeDate' => date('Y/m/d H:i:s'),
    'PaymentType' => 'aio',
    'TotalAmount' => '100',
    'TradeDesc' => 'test desc',
    'ItemName' => 'test name',
    'ReturnURL' => 'http://localhost:8080',
    'ChoosePayment' => 'Credit',
    'EncryptType' => '1',
    'ClientBackURL' => 'http://localhost:8080',
    'PeriodAmount' => '100',
    'PeriodType' => 'M',
    'Frequency' => '5',
    'ExecTimes' => '10',
    'PeriodReturnURL' => 'http://localhost:8080',
];

$checkMacValue = generateCheckMacValue($params);
?>

<!-- HTML form with a button -->
<form method="post" action="https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5">
    <?php foreach ($params as $key => $value): ?>
    <input type="hidden" name="<?php echo $key; ?>" value="<?php echo $value; ?>">
    <?php endforeach; ?>
    <input type="hidden" name="CheckMacValue" value="<?php echo $checkMacValue; ?>">
    <button type="submit">Click me</button>
</form>

<?php get_footer(); ?>