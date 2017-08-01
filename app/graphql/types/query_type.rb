Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :user do
    type Types::UserType
    argument :id, !types.ID
    resolve ->(obj, arg, ctx) do
      { obj => User.find(arg).to_json }
    end
  end

  field :users do
    type types.String
    resolve ->(obj, args, ctx) do
      { obj => User.all.map(&:to_json) }
    end
  end

  # TODO: remove me
  field :testField, types.String do
    description 'An example field added by the generator'
    resolve ->(obj, args, ctx) do
      'Hello World!'
    end
  end
end
