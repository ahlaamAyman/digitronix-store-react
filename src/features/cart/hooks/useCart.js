import { useSelector, useDispatch } from 'react-redux'
import {
    selectCartItems,
    selectSubtotal,
    addItem,
    removeItem,
    updateQuantity,
    toggleSelected,
    toggleSelectAll,
    removeSelected,
} from '../store/cartSlice'

const TAX_RATE = 0.0125

export function useCart() {
    const dispatch = useDispatch()

    const items = useSelector(selectCartItems)
    const subtotal = useSelector(selectSubtotal)

    const selectedCount = items.filter((item) => item.selected).length
    const allSelected = items.length > 0 && selectedCount === items.length

    const taxes = subtotal * TAX_RATE
    const deliveryFee = 0
    const grandTotal = subtotal + taxes + deliveryFee

    return {
        items,
        subtotal,
        taxes,
        deliveryFee,
        grandTotal,
        selectedCount,
        allSelected,

        add: (product) => dispatch(addItem(product)),
        remove: (key) => dispatch(removeItem(key)),
        setQuantity: (key, quantity) => dispatch(updateQuantity({ key, quantity })),
        toggle: (key) => dispatch(toggleSelected(key)),
        toggleAll: () => dispatch(toggleSelectAll()),
        removeChecked: () => dispatch(removeSelected()),
    }
}