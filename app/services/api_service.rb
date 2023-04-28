class ApiService
  include Singleton

  BASE_URL = ENV.fetch('INDICATORS_BASE_URL').freeze
  API_HEADERS = {
    'Content-Type' => 'application/json',
  }.freeze

  def initialize
    @connection = Faraday.new(BASE_URL) do |conn|
      conn.request(:json)
      conn.response(:json)
      conn.adapter(Faraday.default_adapter)
    end
  end

  def get(endpoint, headers = {})
    headers = API_HEADERS.merge(headers)
    response = @connection.get(endpoint, headers)
    response.body
  end
end
