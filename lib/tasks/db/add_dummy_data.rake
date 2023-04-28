namespace :db do
  desc 'Add Dummy Data'
  task add_dummy_data: :environment do
    ActiveRecord::Base.transaction do
      FactoryBot.create_list(:user, 10)
      FactoryBot.create_list(:fund_transfer, 1000)
      FactoryBot.create_list(:paper_rolls_request, 1000)
    end
  end
end
