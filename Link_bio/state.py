import reflex as rx

class NavbarState(rx.State):
    show_menu: bool = False

    def toggle_menu(self):
        self.show_menu = not self.show_menu
        
    def hide_menu(self):
        """Helper method to hide menu when navigating away"""
        self.show_menu = False