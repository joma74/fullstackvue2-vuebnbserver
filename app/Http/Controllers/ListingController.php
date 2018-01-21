<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use Illuminate\Support\Facades\Log;

class ListingController extends Controller
{

    private function add_image_urls($model, $id)
    {
        for($i = 1; $i <=4; $i++) {
            $model['image_' . $i] = asset('images/' . $id . '/Image_' . $i . '.jpg');
        }
        return $model;
    }

    public function get_listing_api(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);
        return response()->json($model);
    }

    public function get_listing_web(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);
        Log::debug("model as array is -> \n".print_r($model, true));
        $model = json_encode($model);
        Log::debug("model as json is -> \n".$model);
        return view('app',['model'=>$model]);
    }
}
