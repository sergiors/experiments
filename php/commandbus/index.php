<?php

use League\Tactician\CommandBus;
use League\Tactician\Handler\CommandHandlerMiddleware;
use League\Tactician\Handler\Locator\InMemoryLocator;
use League\Tactician\Handler\CommandNameExtractor\ClassNameExtractor;
use League\Tactician\Handler\MethodNameInflector\HandleClassNameInflector;

require_once __DIR__.'/vendor/autoload.php';

// Our example Command and Handler. ///////////////////////////////////////////
class RegisterUserCommand
{
    private $emailAddress;
    private $password;

    public function __construct($emailAddress, $password)
    {
        $this->emailAddress = $emailAddress;
        $this->password = $password;
    }

    public function getEmailAddress()
    {
        return $this->emailAddress;
    }
}

class RegisterUserHandler
{
    public function handleRegisterUserCommand(RegisterUserCommand $command)
    {
        // Do your core application logic here. Don't actually echo stuff. :)
        echo "User {$command->getEmailAddress()} was registered!\n";
    }
}



// Middleware is Tactician's plugin system. Even finding the handler and
// executing it is a plugin that we're configuring here.
$handlerMiddleware = new CommandHandlerMiddleware(
    new ClassNameExtractor(),
    new InMemoryLocator([RegisterUserCommand::class => new RegisterUserHandler()]),
    new HandleClassNameInflector()
);

$commandBus = new CommandBus([$handlerMiddleware]);

// Controller Code ////////////////////////////////////////////////////////////
$commandBus->handle(new RegisterUserCommand('alice@example.com', 'secret'));
