FactoryBot.define do
  factory :user do
    first_name { 'Luc' }
    last_name  { 'Test' }
    password {'123'}
    email { 'test@test.com' }
  end
end
