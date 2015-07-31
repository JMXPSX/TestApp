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

  $customer = array(
    new Customer(1, 'Tom Cruise', 'Top Gun', 'tom@gmail.com', '111-111-1111', '222-222-2222'),
    new Customer(2, 'Bruce Willis', 'Nakatomi Plaza', 'bruce@google.com', '333-333-3333', '444-444-4444')
  );

  $post = file_get_contents('php://input');
  if($post) {
    $data = json_decode($post, true);
    foreach ($data as $key => $value) {
      $customer[$data['id'] - 1]->$key = $value;
    }
  }
  
  echo json_encode($customer);

?>