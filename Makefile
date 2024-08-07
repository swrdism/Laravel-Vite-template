all: test_check style_fix style_check

test_check:
	vendor/bin/phpunit --stop-on-error --stop-on-failure

test_coverage:
	vendor/bin/phpunit --coverage-html storage/CI_reports

style_check:
	./vendor/bin/pint --test
	yarn eslint

style_fix:
	./vendor/bin/pint
	yarn fix-style
	yarn eslint --fix