<?php $buttons = ['Call To Action','Another Button'];?>
<table class="wrapper">
  <tr>
    <td>
      <table class="twelve columns">
        <tr class="row">
          @foreach($buttons as $button)
          <td>
            <table class="button">
              <tr>

                <td>
                  <a class="" href="#">{{ $button }}</a>
                </td>
              </tr>
            </table>
          </td>
          @endforeach
          <td class="expander"></td>
        </tr>
      </table>
    </td>
  </tr>
</table>
