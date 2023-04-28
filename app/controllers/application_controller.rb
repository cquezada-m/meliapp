class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActionController::RoutingError, with: :route_not_found
  rescue_from ActionController::ParameterMissing, with: :parameter_missing
  rescue_from ActionController::UnknownFormat, with: :unknown_format
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

  private

  def record_not_found
    render json: { error: 'Record not found', status: 404, details: 'The requested record could not be found' }, status: :not_found
  end

  def route_not_found
    render json: { error: 'Route not found', status: 404, details: 'The requested route could not be found' }, status: :not_found
  end

  def parameter_missing(exception)
    render json: { error: 'Parameter missing', status: 422, details: "The following parameter is missing: #{exception.param}" },
           status: :unprocessable_entity
  end

  def unknown_format
    render json: { error: 'Unknown format', status: 406, details: 'The requested format is not available' }, status: :not_acceptable
  end

  def unprocessable_entity(exception)
    render json: { errors: exception.record.errors.messages }, status: :unprocessable_entity
  end
end
