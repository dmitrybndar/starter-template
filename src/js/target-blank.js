// add target blank to external links
const siteUrl = window.location.hostname;
$('a[href*="//"]:not([href*="' + siteUrl + '"])').attr({
  target: '_blank',
  rel: 'noopener noreferrer'
});