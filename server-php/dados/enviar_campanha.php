<?php 

include("libs/connection.php");

$campanha = $_REQUEST['id'];
$sql = "UPDATE campanhas SET status='1' WHERE id = :id";

$stmt = $db->prepare($sql);

$stmt->bindParam(':id', $campanha);

$stmt->execute();
