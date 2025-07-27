<?php

namespace App\Classes;

class IOClass
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function dataToCsv($data)
    {
        $csv = '';
        foreach ($data as $row) {
            $csv .= implode(',', $row) . "\n";
        }
        return $csv;
    }

    public function csvToData($csv)
    {
        return array_map('str_getcsv', explode("\n", $csv));
    }

    public function dataToJson($data)
    {
        return json_encode($data);
    }

    public function jsonToData($json)
    {
        return json_decode($json, true);
    }

    public function exists($file)
    {
        return file_exists($file);
    }

    public function read($file)
    {
        return file_get_contents($file);
    }

    public function write($file, $data)
    {
        return file_put_contents($file, $data);
    }

    public function delete($file)
    {
        return unlink($file);
    }
}
