from flask import Blueprint, request

bp = Blueprint("sketch2portrait", __name__, url_prefix="/sketch2portrait")

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@bp.route("/", methods=("GET", "POST"))
def sketch2portrait():
    raise NotImplementedError
    if request.method == "POST":
        # if "sketch" not in request.files:
        #     return {"error": "no sketch part"}, 400

        # sketch = request.files["sketch"]

        # if sketch.filename == "":
        #     return {"error": "no portrait provided"}, 400

        # if sketch and allowed_file(sketch.filename):
        # load model
        # model = h5py.File('g_model.h5', 'r')

        return {}