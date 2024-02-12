import { graphql, useGraphQLMutation } from '@/lib/react-query-graphql'
import { mutateSession } from './mutateSession'
import toast from 'react-hot-toast'
import {Text} from '@/components/ui/text'

const LoginMutationDocument = graphql(`
  #graphql
  mutation Login($input: LoginAdminInput!) {
    loginAsAdmin(input: $input) {
      accessToken
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`)

export function useLoginMutation() {
  return useGraphQLMutation(
    {
      onError(error) {
        const firstError = error.response.errors?.find(e => e.message)
        if (!firstError) return
        toast.error(<Text tag="b">{firstError.message}</Text>);
      },
      onSuccess(data) {
        return mutateSession({
          accessToken: data.loginAsAdmin?.accessToken,
          shouldBroadcast: true
        })
      }
    },
    LoginMutationDocument
  )
}
