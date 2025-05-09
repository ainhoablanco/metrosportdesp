@extends('layouts.nav')

@section('missatge')
<div class="xat">
    <a href="{{ route('missatge.index') }}"><img src="{{ asset('assets/iconos_nav/missatge.png') }}" alt="Xat"></a>
</div>

@endsection
