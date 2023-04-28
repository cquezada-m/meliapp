require "test_helper"

class Api::V1::MeliChatControllerTest < ActionDispatch::IntegrationTest
  test "should get deposit" do
    get api_v1_meli_chat_deposit_url
    assert_response :success
  end

  test "should get paper_rolls_request" do
    get api_v1_meli_chat_paper_rolls_request_url
    assert_response :success
  end

  test "should get indicator" do
    get api_v1_meli_chat_indicator_url
    assert_response :success
  end
end
