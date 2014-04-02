test:
	DEBUG= ./node_modules/.bin/mocha -R spec --recursive

.PHONY: test
