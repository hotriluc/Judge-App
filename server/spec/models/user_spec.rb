require 'rails_helper'

RSpec.describe User, type: :model do

  context 'create a user' do
    it 'is valid' do
      user = create(:user)
      expect(user).to be_valid
    end

    it 'empty password is invalid' do
      invalid_user = build(:user, { password: '' })
      expect(invalid_user).not_to be_valid
    end

    it 'duplicate email is invalid' do
      user = create(:user)
      user_duplicate = build(:user, { first_name: 'John', last_name: 'Legend' })
      expect(user_duplicate.email).to eq(user.email)
      expect(user_duplicate).not_to be_valid
    end

  end

end
