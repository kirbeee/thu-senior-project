        <Provider store={store}>
            <div className="flex flex-col min-h-screen"> {/* Make layout container flex, vertical, min-height full screen */}
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8"> {/* main content area, flex-grow to take available space, container for responsive width, padding */}
                    {children}
                </main>
                <Footer />
            </div>
        </Provider>

