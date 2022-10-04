from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=255)
    last_name = serializers.CharField(max_length=255)
    email = serializers.EmailField(max_length=255)
    goal = serializers.CharField(max_length=255)
    budget = serializers.CharField(max_length=255)
    message = serializers.CharField(min_length=1)

    class meta:
        fields = '__all__'