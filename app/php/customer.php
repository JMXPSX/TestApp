<?php

class Customer {
	public $cid;
	public $lastName;
	public $firstName;
	public $company;
	public $title;
	public $email;
	public $phone;

	function __construct($cid,$lastName,$firstName,$company,$title,$email,$phone){
		$this->cid       = $cid;
		$this->lastName  = $lastName;
		$this->firstName = $firstName;
		$this->company   = $company;
		$this->title     = $title;
		$this->email     = $email;
		$this->phone     = $phone; 
	}
};

$dbName = 'jmxpsx';
$dbUser = 'root';
$dbPass = '';
$dbHost = 'localhost';
$connect = mysql_connect($dbHost, $dbUser, $dbPass) or die("Unable to connect to '$dbHost'");
mysql_select_db($dbName) or die("Could not open the database '$dbName'");

$customer = array();

$post = file_get_contents('php://input');

if($post){

	$data = json_decode($post, true);

	switch ($_GET['action']) {
		case 'create':
			
			mysql_query("INSERT INTO `customer` (`lastName`,`firstName`,`company`,`title`,`email`,`phone`) VALUES ('{$data['lastName']}','{$data['firstName']}','{$data['company']}','{$data['title']}','{$data['email']}','{$data['phone']}')" );

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

			mysql_query("DELETE FROM `customer` WHERE `cid` = {$data['id']}");

			break;
			
		default:
			
			break;
	}

} else {

	$results = mysql_query('SELECT * FROM `customer`');
	$tblCnt = 0;
	while($result = mysql_fetch_array($results)){
		$tblCnt++;
		$customer[] = new Customer($result['cid'], $result['lastName'], $result['firstName'], $result['company'], $result['title'], $result['email'], $result['phone'] );
	}

	echo json_encode($customer);

}

?>