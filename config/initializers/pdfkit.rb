PDFKit.configure do |config|
  config.wkhtmltopdf = '/usr/local/bin/wkhtmltopdf'
  config.verbose = false
  config.default_options = {
    encoding: 'UTF-8',
    margin_top: '0.6in',
    margin_left: '0.3in',
    margin_right: '0.3in',
    margin_bottom: '0.6in',
  }
end
