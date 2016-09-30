<?php namespace App\Providers;

use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider {

	/**
	 * The event handler mappings for the application.
	 *
	 * @var array
	 */
	protected $listen = [
		'App\Events\NewTransaction' => [
			'App\Listeners\NewTransactionListener',
		],
		'App\Events\UpdatedTransaction' => [
			'App\Listeners\UpdatedTransactionListener',
		],
		'App\Events\CancelledTransaction' => [
			'App\Listeners\CancelledTransactionListener',
		],
		'App\Events\AcceptedTransaction' => [
			'App\Listeners\AcceptedTransactionListener',
		],
		'App\Events\DeletedTransaction' => [
			'App\Listeners\DeletedTransactionListener',
		],
	];

	/**
	 * Register any other events for your application.
	 *
	 * @param  \Illuminate\Contracts\Events\Dispatcher  $events
	 * @return void
	 */
	public function boot(DispatcherContract $events)
	{
		parent::boot($events);

		//
	}

}
