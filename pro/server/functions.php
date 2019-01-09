<?php
require_once "admin/db_connection.php";
if(!isset($_POST['insert_products']))
{
    $pro_title =isset($_POST['pro_title']) ? $_POST['pro_title'] : '';
    $pro_cat =isset($_POST['pro_cat']) ? $_POST['pro_cat'] : '';
    $pro_brand =isset($_POST['pro_brand']) ? $_POST['pro_brand'] : '';
    $pro_price =isset($_POST['pro_price']) ? $_POST['pro_price'] : '';
    $pro_desc =isset($_POST['pro_desc']) ? $_POST['pro_desc'] : '';
    $pro_keywords =isset($_POST['pro_kw']) ? $_POST['pro_kw'] : '';
    $insertQuery = "insert into products(pro_title,pro_cat,pro_brand,pro_price,pro_desc,pro_keywords)
    values('$pro_title','$pro_cat','$pro_brand','$pro_price','$pro_desc','$pro_keywords');";
    //echo $insertQuery;
    $res = mysqli_query($con,$insertQuery);
    if(!$res)
    {
        echo "Not Executed";
    }
}
function getCats(){
    global $con;
    $getCatsQuery = "select * from categories";
    $getCatsResult = mysqli_query($con,$getCatsQuery);
    while($row = mysqli_fetch_assoc($getCatsResult)){
        $cat_id = $row['cat_id'];
        $cat_title = $row['cat_title'];
        echo "<option value='$cat_id'>$cat_title</option>";
    }
}
function getBrands(){
    global $con;
    $getBrandsQuery = "select * from brands";
    $getBrandsResult = mysqli_query($con,$getBrandsQuery);
    while($row = mysqli_fetch_assoc($getBrandsResult)){
        $brand_id = $row['brand_id'];
        $brand_title = $row['brand_title'];
        echo "<option value='$brand_id'>$brand_title</option>";
    }
}
function getPro(){
    global $con;
    $getProQuery = "select * from products order by RAND();";
    $getProResult = mysqli_query($con,$getProQuery);
    while($row = mysqli_fetch_assoc($getProResult)){
        $pro_id = $row['pro_id'];
        $pro_title = $row['pro_title'];
        $pro_price = $row['pro_price'];
        $pro_image = $row['pro_image'];
        echo "
                <div class='col-sm-6 col-md-4 col-lg-3 text-center product-summary'>
                    <h5 class='text-capitalize'>$pro_title</h5>
                    <img src='admin/product_images/$pro_image'>
                    <p> <b> Rs $pro_price/-  </b> </p>
                    <a href='detail.php' class='btn btn-info btn-sm'>Details</a>
                    <a href='#'>
                        <button class='btn btn-primary btn-sm'>
                            <i class='fas fa-cart-plus'></i> Add to Cart
                        </button>
                    </a>
                </div>
        ";
    }
}