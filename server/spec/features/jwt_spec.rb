require 'rails_helper'

RSpec.describe "JWT", type: :feature do

  let(:user) { create(:user) }
  let(:application) { ApplicationController.new }
  let(:jwt_token) { application.issue_token(user) }
  let(:jwt_key) { application.jwt_key }

  context 'authentication' do
    it 'should decode jwt' do
      expect(jwt_token).not_to be_empty
      decoded_token = JWT.decode(jwt_token, jwt_key, true, algorithm: 'HS256')
      expect(decoded_token).to_not raise_error(JWT::DecodeError)
      expect(decoded_token[0]['user_id']).to eq(user.id)
    end
  end
end
