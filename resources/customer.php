<?php
  class Customer {
    public $cid;
    public $name;
    public $company;
    public $email;
    public $phone;
    public $mobile;
    
    function __construct($cid, $name, $company, $email, $phone, $mobile) {
      $this->cid      = $cid;
      $this->name     = $name;
      $this->company  = $company;
      $this->email    = $email;
      $this->phone    = $phone;
      $this->mobile   = $mobile;
    }

  };

  $dbname = 'masteringextjs';
  $dbuser = 'root';
  $dbpass = 'root';
  $dbhost = 'localhost';
  $connect = mysql_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");
  mysql_select_db($dbname) or die("Could not open the db '$dbname'");

  $customer = array();

  /*
  $customer = array(
    new Customer(1, 'Tom Cruise', 'Top Gun', 'tom@gmail.com', '111-111-1111', '222-222-2222'),
    new Customer(2, 'Bruce Willis', 'Nakatomi Plaza', 'bruce@google.com', '333-333-3333', '444-444-4444')
  );
  */

  $post = file_get_contents('php://input');
  if($post) {
    $data = json_decode($post, true);
    if(intval($data['id']) === 0) {
      mysql_query("INSERT INTO `customer` (`name`, `company`, `email`, `phone`, `mobile`) VALUES ('{$data['name']}', '{$data['company']}', '{$data['email']}', '{$data['phone']}', '{$data['mobile']}')");
    } else {
      $fields = '';
      foreach ($data as $key => $value) {
        if($key == 'id') continue;
        $fields .= ", `{$key}`='{$value}'";
      }
      $fields = substr($fields, 2);
      mysql_query("UPDATE `customer` SET {$fields} WHERE `cid` = {$data['id']}");
    }
  } else {
    $results = mysql_query('SELECT * FROM `customer`');
    $tblCnt = 0;
    while($result = mysql_fetch_array($results)) {
      $tblCnt++;
      $customer[] = new Customer($result['cid'], $result['name'], $result['company'], $result['email'], $result['phone'], $result['mobile']);
    }
  }
  
  echo json_encode($customer);

?>