class Api::V1::MeliChatController < ApplicationController
  include ValidateParams

  before_action :set_user, only: [:deposit, :paper_rolls_request]

  def deposit
    available_at = deposit_params[:available_at].to_date
    funds = @user.funds_transfers.total_available(available_at)
    render json: { funds: }
  end

  def paper_rolls_request
    paper_roll = @user.paper_rolls_requests.new(paper_rolls_request_params[:paper_roll])

    if paper_roll.save!
      render json: paper_roll, serializer: PaperRollsRequestSerializer
    end
  end

  def indicator
    response = ApiService.instance.get(indicator_params[:name])
    render json: response
  end

  private

  def set_user
    @user = User.find_by!(rut: params[:rut])
  end
end
