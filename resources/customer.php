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
  $dbpass = '';
  $dbhost = 'localhost';
  $connect = mysql_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");
  mysql_select_db($dbname) or die("Could not open the db '$dbname'");

  $customer = array();
  
  $post = file_get_contents('php://input');
  if($post) {
    $data = json_decode($post, true);
//    var_dump();
    switch ($_GET['action']) {
      
      case 'create':
        mysql_query("INSERT INTO `customer` (`name`, `company`, `email`, `phone`, `mobile`) VALUES ('{$data['name']}', '{$data['company']}', '{$data['email']}', '{$data['phone']}', '{$data['mobile']}')");
      
        break;
      
      case 'update':
        $fields = '';
        foreach ($data as $key => $value) {
          if($key == 'id') continue;
          $fields .= ", `{$key}`='{$value}'";
        }
        $fields = substr($fields, 2);
        mysql_query("UPDATE `customer` SET {$fields} WHERE `cid` = {$data['id']}");

        break;
      
      case 'destroy':
        //echo "id = " . $data['id'];
        mysql_query("DELETE FROM `customer` WHERE `cid` = {$data['id']}");
        
        break;


    }   
    

  } else {

    $results = mysql_query('SELECT * FROM `customer`');
    $tblCnt = 0;
    while($result = mysql_fetch_array($results)) {
      $tblCnt++;
      $customer[] = new Customer($result['cid'], $result['name'], $result['company'], $result['email'], $result['phone'], $result['mobile']);
    }

    echo json_encode($customer);    

  }
?>