.PHONY: init test run hello health
        init:
	./setup.sh
        test:
	. .venv/bin/activate && pytest -q
        run:
	. .venv/bin/activate && python $(t)
        hello:
	make run t=tasks/hello_world.py
        health:
	make run t=tasks/healthcheck.py
