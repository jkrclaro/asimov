from dotenv import find_dotenv, load_dotenv

from rewardg import create_app

load_dotenv(find_dotenv())
app = create_app()


if __name__ == '__main__':
    app.run()
