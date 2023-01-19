<?php 
    function dolarHoy(){
        $url = curl_init('https://dolarhoy.com/');

        curl_setopt($url, CURLOPT_RETURNTRANSFER, true);

        $dom = new DOMDocument();
        $dom -> loadHTML(curl_exec($url));
        $info = curl_getinfo($url);
        curl_close($url);


        $divs = $dom -> getElementsByTagName("div");
        $i = 0;


        foreach ($divs as $div) {
            if ($div -> getAttribute("class") === "val") {
                $dolar[$i] = $div -> nodeValue;
                $dolar[$i] = str_replace("$", "", $dolar[$i]);
                $dolar[$i] = floatval($dolar[$i]);
                $i++;
            }
        }
        return $dolar;
    }

?>