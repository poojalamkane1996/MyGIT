<?php
echo "hii";
$customer_name=filter_input(INPUT_POST,'Customer_name');
$Address=filter_input(INPUT_POST,'Address');
$Customer_Number=filter_input(INPUT_POST,'Customer_Number');
$Meter_Serial_Number=filter_input(INPUT_POST,'Meter_Serial_Number');

if(!empty($customer_name) ||!empty($Address) ||!empty($Customer_Number) ||!empty($Customer_Number) )
{
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $dbname="gasdb";
    
    //create connection
    $conn=new mysqli($host,$dbusername,$dbpassword,$dbname);

    if(mysqli_connect_error()){
        die('connect error('.mysqli_connect_errno().')'.mysqli_connect_errno());
    }
    else
    {
        $INSERT =Insert Into register(customer_name,Address,Customer_Number,Meter_Serial_Number) values('$customer_name',
        '$Address','$Customer_Number','$Meter_Serial_Number');
        if($conn->query($INSERT))
        {
            echo "new record inserted successfully"
        }
        else
        {
            echo "error"
        }
        //prepare stmt
        // $stmt->$execute();
        // $stmt->store_result();
        // $rnum=$stmt->num_rows;
        // if($rnum ==0)
        // {
        //     $stmt->close();
        //     $stmt=$conn->$prepare($INSERT);
        //     $stmt->bind_param("pooja",$customer_name,$Address,$Customer_Number,$Meter_Serial_Number);
        //     $stmt->excute();
        //     echo "New Record Inserted succeccfully"
        // }

    }
    $stmt->close();
    $conn->close();

}
else
{
    echo "All Fields are required!"
    die();
}


?>