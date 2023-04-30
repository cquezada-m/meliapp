class PdfService
  BASE_PATH = ENV['API_DOMAIN'].freeze

  def self.export(...)
    new(...).export
  end

  attr_reader :paper_rolls

  def initialize(paper_rolls)
    @paper_rolls = paper_rolls
  end

  def export
    public_url = "pdf/#{file_name}"
    file_url = Rails.public_path.join(public_url).to_s
    PDFKit.new(pdf_content_as_html).to_file(file_url)

    "#{BASE_PATH}/#{public_url}"
  end

  def pdf_content_as_html
    template_path = Rails.root.join('app/views/pdf.slim')
    Slim::Template.new(template_path).render(nil, paper_rolls:)
  end

  def file_name
    "#{Time.current.to_i}-#{paper_rolls.id}-paper-rolls-request.pdf"
  end
end
