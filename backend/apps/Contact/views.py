from .serializers import ContactSerializer
from .utils import Util
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView

class ContactView(GenericAPIView):
    serializer_class = ContactSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        first_name = serializer.data['first_name']
        last_name = serializer.data['last_name']
        email = serializer.data['email']
        business_goal = serializer.data['business_goal']
        budget = serializer.data['budget']
        message = serializer.data['message']

        email_subject = 'Contact: ' + first_name + ' ' + last_name
        email_body = 'Email: ' + email + '\nFirst name: ' + first_name + '\nLast_name: ' + last_name + '\nBusiness_goal: ' + business_goal + '\nBudget: ' + budget + '\nMessage: \n' + message
        data = {'email_body': email_body, 'to_email': 'divideproject.business@gmail.com', 'email_subject': email_subject}
        Util.send_email(data)

        return Response({'Message has been sent'}, status=status.HTTP_200_OK)


