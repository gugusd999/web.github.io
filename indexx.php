<?php

  header("Access-Control-Allow-Origin: *");

  $myfile = fopen(".env", "r") or die("Unable to open file!");
  $key = fread($myfile,filesize(".env"));
  fclose($myfile);

  if (isset($_POST['key'])) {

    $dataKey = json_decode($key, true)['key'];
    $rqkey = $_POST['key'];

    if ($rqkey === $dataKey) {

      $action = "data";

      if (isset($_POST['action'])) {
        $action = $_POST['action'];
      }

      $host = 'localhost';

      $user = 'u5088663_bpkbuser';

      $password = '^3=!hoU_66{M';

      $database = 'u5088663_bpkbmotordb';


      $conn = mysqli_connect($host, $user, $password, $database);

      if ($action === "data") {


        if (!mysqli_query($conn, $_POST['query'])) {
            printf("Errormessage: %s\n", mysqli_error($conn));
        }else{
          $query = mysqli_query($conn, $_POST['query']);

          $arr = [];

          while($mo = mysqli_fetch_assoc($query)){
            $dkd = array_keys($mo);
            $mkm = [];
            foreach($dkd as $mm => $dkdd){
              $mkm[$dkdd] = htmlspecialchars($mo[$dkdd]);
            }
            $arr[] = $mkm;
          }

          print json_encode($arr);
        }

      }elseif($action === "update" || $action === "save"){
        if (!mysqli_query($conn, $_POST['query'])) {
            printf("Errormessage: %s\n", mysqli_error($conn));
        }else{
          echo "save";
        }
      }

    }else{

      $myfile = fopen(".sorry", "r") or die("Unable to open file!");
      $key = fread($myfile,filesize(".sorry"));
      fclose($myfile);

      print $key;

    }

  }else{

    $myfile = fopen(".sorry", "r") or die("Unable to open file!");
    $key = fread($myfile,filesize(".sorry"));
    fclose($myfile);

    print $key;


  }

  // this only server request not more


  ?>
