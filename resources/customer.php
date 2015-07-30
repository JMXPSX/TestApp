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
    new Customer(1, 'Phan Chuong', 'ImPhan', 'pltchuong@gmail.com', '111-111-1111', '222-222-2222'),
    new Customer(2, 'Jet Castro', 'Solutions Resource', 'jet@solutionsresource.com', '333-333-3333', '444-444-4444')
  );

  echo json_encode($customer);
?>