angular.module( 'BookModule' )
	.controller( 'BookListController', function( $rootScope, $scope, $location, $uibModal, BookService, $timeout ) {

		// Fire the books fetch (get)
		BookService.get().then( function( bookList ) {
			$scope.books = bookList;
		} );

		var beforeUpdateTitle;

		$scope.editBook = function( book ) {
			book.editing = true;
			beforeUpdateTitle = book.title;
		}

		$scope.finishEditBook = function( book ) {
			book.editing = false;				
			

			updateBook(book).then(function () {
				$rootScope.$broadcast("alert", {"msg": "Livro com o título '" + beforeUpdateTitle 
					+ "', alterado para o título '" +  book.title + "'.", type: 'success'});
				book.finishedEditing = true;

				$timeout(function () {
					book.finishedEditing = false;
				}, 5000);
			});
			
		}

		$scope.deleteBook = function( index ) {

			$scope.selectedBook = getBookByIndex( index );

			var modalInstance = $uibModal.open( {
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				size: "large",
				resolve: {
					selectedBook: function() {
						return $scope.selectedBook;
					}
				}
			} );

			modalInstance.result.then( function( book ) {

				// Delete the book
				BookService.delete( book._id ).then( function( res ) {
					if ( res ) {
						console.log( res );
						$rootScope.$broadcast( "alert", {
							msg: 'Livro \'' + book.title + '\' apagado'
						, type: 'danger' } );

						// Update the list of books with the returned one
						$scope.books.splice(index, 1);
					}
				} )

			}, function( err ) {
				console.log( err );
			} );
		};

		function getBookByIndex( index ) {
			return $scope.books[ index ];
		}

		function updateBook (book) {
			return BookService.update( book ).then( function( updatedBook ) {
				book = updatedBook;
				return true;
			} )
			
		}
	} );