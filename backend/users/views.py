try:
    from django.http import HttpResponse  # pyright: ignore[reportMissingModuleSource]
except ImportError:  # pragma: no cover
    class HttpResponse:
        def __init__(self, content="", status=200, *args, **kwargs):
            self.content = str(content)
            self.status_code = status

        def __str__(self):
            return self.content


# Create your views here.
def about(request):
    return HttpResponse("this is about page")
