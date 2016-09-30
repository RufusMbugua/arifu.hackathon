@extends('layouts.main_email')
<!---->

{{-- Message Section --}}
@section('message')
  {{-- User Name --}}
    @if(isset($username))
      <h3>Hi {{$username}} ,</h3>
    @else
    <p>
        {{ $username }}
    </p>
    @endif
  {{-- Message Text --}}
    @if(!isset($text))
      <p>There is no message.</p>
    @else
    <p>
      {{ $text }}
    </p>
    @endif

@endsection
