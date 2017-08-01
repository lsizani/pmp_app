PmpAppSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)

  resolve_type ->(type, obj, ctx) do
    case obj
    when User
      pp type
      pp obj
      pp ctx
      Types::UserType
    else
      raise("Don't know how to get the GraphQL type of a #{obj.class.name} (#{obj.inspect})")
    end
  end
end
