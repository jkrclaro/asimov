# Testing

For more info, check out the [Offical Documentation of Pytest](https://docs.pytest.org/en/latest/logging.html)

## Usage

Update files in `pytest.ini` to modify how pytest works

To run one singular test method

```
pipenv run pytest tests/test_netlify::TestNetlify::test_deploy_site
```