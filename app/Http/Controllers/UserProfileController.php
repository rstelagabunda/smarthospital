<?php

namespace App\Http\Controllers;

use App\Models\jabatan;
use App\Models\JadwalKerja;
use App\Models\pendidikan;
use App\Models\statuskerja;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::when($request->term, function($query, $term){
            $query->where('name','LIKE','%'.$term.'%');
        })->select('name','profile_photo_path','id','title')->paginate(10);
        // dd($users);
        return Inertia::render('users/index',['users'=>$users,'term'=>$request->term?$request->term:'']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function show(User $user,Request $request)
    {
        $user=user::where('id',$user->id)->with('userfamilymembers','userpersonaldata')->first();
        $masterdata=[
            "jabatan" => jabatan::all(),
            "jadwalkerja" => JadwalKerja::all(),
            "statuskerja" => statuskerja::all(),
            "pendidikan" => pendidikan::all(),
        ];
        return inertia::render('users/userprofile',[
            'userprofile'=>$user,'tab'=>$request->get('tab')?$request->get('tab'):0,'masterdata'=>$masterdata
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserProfile  $userProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
