<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width"/>
    <!-- <link rel="stylesheet" href="libs/styles/ink.css"> <!-- For testing only -->
    <link rel="stylesheet" href="dist/styles.css">
@include('layouts.partials.email.ink')
    <style type="text/css">
      /* Your custom styles go here */
      table{
      border:none;
      }
      p+p{
        margin-top:1em;
        text-indent: 0 !important;
      }
    </style>
  </head>
  <body>
    <table class="body">
      <tr>
        <td class="center" align="center" valign="top">
          <center>
            <table class="container">
              <tr>
                <!-- Email Content -->
                <!-- Header -->
                @include('layouts.partials.email.header')

                <!-- Message Body -->
                @include('layouts.partials.email.body')

                <!-- Footer  -->
                @include('layouts.partials.email.footer')
              </tr>
            </table>

          </center>
        </td>
      </tr>
    </table>
  </body>
</html>
