<?php 
include('../../db.php');


// 用PDO連接到MYsql
try {
    $pdo = new PDO("mysql:host=$db[host];dbname=$db[dbname];port=$db[port];charset=$db[charset]",
    $db['username'], $db['password']);
} catch(PDOException $e){
    echo "Database connection failed.";
    exit;
}

// ASC = 递增排序
$sql = 'SELECT * FROM todos ORDER BY `order` ASC';
$statement = $pdo->prepare($sql);
$statement->execute();
$todos = $statement->fetchALL(PDO::FECTCH_ASSOC);
