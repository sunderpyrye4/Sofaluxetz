$(document).ready(function() {
  if (!localStorage.getItem('cookieConsent')) {
    $('#privacyPopup').show();
  }
  $('#acceptCookies').on('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    $('#privacyPopup').hide();
  });
  $('#declineCookies').on('click', function() {
    localStorage.setItem('cookieConsent', 'declined');
    $('#privacyPopup').hide();
  });
});