# Testing

For more info, check out the [Offical Documentation of Pytest](https://docs.pytest.org/en/latest/logging.html)

## Setup

Update files in `pytest.ini` to modify how pytest works

## Usage

To run one singular test method

```
pipenv run pytest tests/test_netlify.py::TestNetlify::test_deploy_site
```