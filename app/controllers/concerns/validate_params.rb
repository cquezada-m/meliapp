module ValidateParams
  extend ActiveSupport::Concern

  private

  def deposit_params
    params.permit(:rut, :available_at).tap do |whitelisted|
      whitelisted.require(:rut)
      whitelisted.require(:available_at)
    end
  end

  def paper_rolls_request_params
    params.permit(:rut, paper_roll: [:address, :amount]).tap do |whitelisted|
      whitelisted.require(:rut)
      whitelisted.require(:paper_roll).require(:address)
      whitelisted.require(:paper_roll).require(:amount)
    end
  end

  def indicator_params
    params.permit(:name).tap do |whitelisted|
      whitelisted.require(:name)
    end
  end
end
