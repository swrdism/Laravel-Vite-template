all: test_check style_fix style_check

test_check:
	vendor/bin/phpunit --stop-on-error --stop-on-failure

test_coverage:
	vendor/bin/phpunit --coverage-html storage/CI_reports

style_check:
	./vendor/bin/pint --test
	pnpm eslint

style_fix:
	./vendor/bin/pint
	pnpm prettier . --write
	pnpm eslint --fix

install:
	docker exec -it laravel-vite-vue_workspace yarn 
	docker exec -it laravel-vite-vue_workspace composer install

key:
	docker exec -it laravel-vite-vue_workspace php artisan key:generate

dev:
	docker exec -it laravel-vite-vue_workspace yarn vite

serve:
	docker exec -it laravel-vite-vue_workspace yarn build
